import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY env vars')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

const videos = [
  'JTVF2442.mp4', 'LBGT2910.mp4', 'NZLU9756.mp4', 'OAOZ1135.mp4',
  'PIAP0680.mp4', 'RTAM6777.mp4', 'UTGF7047.mp4',
  'img-6511.mp4', 'img-6523.mp4', 'img-6578.mp4', 'img-6982.mp4',
  'img-9373.mp4', 'img-9434.mp4', 'img-9680.mp4'
]

const videosDir = join(__dirname, '..', 'public', 'videos')

async function uploadVideos() {
  console.log('Creating videos bucket...')
  const { data: bucket, error: bucketError } = await supabase.storage.createBucket('videos', {
    public: true,
    fileSizeLimit: 52428800
  })
  if (bucketError && !bucketError.message.includes('already exists')) {
    console.error('Bucket error:', bucketError)
    return
  }
  console.log('Bucket ready')

  for (const video of videos) {
    const filePath = join(videosDir, video)
    try {
      const fileBuffer = readFileSync(filePath)
      console.log(`Uploading ${video} (${(fileBuffer.length / 1024 / 1024).toFixed(1)}MB)...`)
      const { data, error } = await supabase.storage
        .from('videos')
        .upload(video, fileBuffer, {
          contentType: 'video/mp4',
          upsert: true
        })
      if (error) {
        console.error(`Error uploading ${video}:`, error.message)
      } else {
        const { data: urlData } = supabase.storage.from('videos').getPublicUrl(video)
        console.log(`  Uploaded: ${urlData.publicUrl}`)
      }
    } catch (err) {
      console.error(`Failed to process ${video}:`, err.message)
    }
  }
  console.log('Done!')
}

uploadVideos()
