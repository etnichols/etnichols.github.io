import { DEV_APP_ID } from '@/data/test-app-ids'

export default function IframeDevPage() {
  return (
    <iframe
      id={`interactApp${DEV_APP_ID}`}
      width="800"
      height="977"
      style={{ border: 'none', maxWidth: '100%', margin: 0 }}
      allowTransparency={true}
      src={`https://quiz.tryinteract.dev/#/${DEV_APP_ID}?method=iframe&mobile=1`}
    ></iframe>
  )
}
