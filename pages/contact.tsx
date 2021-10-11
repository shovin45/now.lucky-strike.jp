import React, { ReactElement,useState } from 'react'
import { useForm } from 'react-hook-form';
import type { NextPageWithLayout } from './_app'
import NestedLayout from '../layouts/NestedLayout'

import SEO from '../components/SEO'
import NestedSection from '../components/NestedSection'

const Contact: NextPageWithLayout = () => {
  const title = 'CONTACT'

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading,setLoading] = useState(false);

  const onSubmit = async ({name,email,message}) => {
    if(loading) return

    setLoading(true)
    const body = JSON.stringify({text:`
名前
${name}

メールアドレス
${email}

お問い合わせ内容
${message}
`,email})
    const res = await fetch('/api/mail', {
      method: 'POST',
      
      body,
    })


    if(res.status === 200){
      alert('お問い合わせありがとうございます。送信完了しました！');
      location.reload()
    }
  }




  return (
    <div className='relative pt-12 sm:pt-20 min-h-screen'>
      <SEO name={title} path='contact' />

      <NestedSection title={title} position='center 80%'>





        <div className='text-black m-auto max-w-screen-sm'>

        <div className='mx-auto -mt-8 sm:-mt-12 text-white'>
          <h2 className='text-7xl sm:text-8xl font-bold'>
            CONTACT - お問い合わせ
          </h2>
        </div>
          

        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="block mt-5 mb-1 text-sm font-medium text-gray-400">お名前 *</label>
        <input id="name" type="text" placeholder="お名前" {...register("name", {required: true, maxLength: 80})} className='focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-4 sm:text-sm border-gray-300 rounded-md' />
        <span className='block text-red-400 my-2 text-sm'>{errors.name?.type === 'required' && "必須入力項目です。"}</span>
        
        <label htmlFor="email" className="block mt-5 mb-1 text-sm font-medium text-gray-400">メールアドレス *</label>
        <input id="email" type="text" placeholder="メールアドレス" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} className='focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-4 sm:text-sm border-gray-300 rounded-md' />
        <span className='block text-red-400 my-2 text-sm'>{errors.email?.type === 'required' && "必須入力項目です。"}</span>
        <span className='block text-red-400 my-2 text-sm'>{errors.email?.type === 'pattern' && "正しいメールアドレスを入力してください。"}</span>

        <label htmlFor="text" className="block mt-5 mb-1 text-sm font-medium text-gray-400">お問い合わせ内容 *</label>
        <textarea id="text" rows='10' {...register("message", {required: true, min: 0, maxLength: 3000})} className='focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-4 sm:text-sm border-gray-300 rounded-md' />
        <span className='block text-red-400 my-2 text-sm'>{errors.message?.type === 'required' && "必須入力項目です"}</span>

        <button type="submit" className='mt-5 text-white bg-blue-600 py-4 px-6 rounded-md'>
          送信する
        </button>
      </form>


        </div>
      </NestedSection>
    </div>
  )
}

Contact.getLayout = (page: ReactElement) => {
  return <NestedLayout>{page}</NestedLayout>
}

export default Contact
