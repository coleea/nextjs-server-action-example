import { redirect, notFound } from 'next/navigation'

async function action(formData) {
  'use server'
  redirect(
    '/header?name=' +
      formData.get('name') +
      '&constructor=' +
      formData.constructor.name
  )
}

async function nowhere() {
  'use server'
  notFound()
}

async function file(formData) {
  'use server'
  console.log('파일처리 함수가 서버에서 실행됨');
  const file = formData.get('file')
  console.log('File name:', file.name, 'size:', file.size)
}

export default function Form() {
  return (
    <>
    <div align="center" className="" style={{display :"flex", flexDirection : "column", "gap" : "3em", marginTop : "3em"}}>

        <form method="POST" action="">
          <input type="text" name="$$id" value={action.$$id} hidden readOnly />
          <input type="text" name="name" id="name" required />
          <button type="submit" id="submit">
            Submit
          </button>
        </form>
        <div className="" >
          <form method="POST" action="" >
            <input type="text" name="$$id" value={nowhere.$$id} hidden readOnly />
            <button type="submit" id="nowhere" style={{padding : "1em"}}>
              {`Page Not Found로 리다이렉팅`}
            </button>
          </form>
        </div>
        <form action={file}>
          <input type="file" name="file" id="file" required />
          <button type="submit" id="upload" style={{padding : "1em"}}>
            Upload File
          </button>
        </form>
    </div>
    </>
  )
}