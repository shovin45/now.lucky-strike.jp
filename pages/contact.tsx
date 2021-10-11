import { useMail } from '../hooks/useMail'

export default function Mail() {
  const { setName, setMessage, send } = useMail()

  return (
    <div className='text-black'>
      <input
        className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
        type='text'
        onChange={(e) => setName(e.target.value)}
      />
      <textarea onChange={(e) => setMessage(e.target.value)} />
      <button className='text-white' type='button' onClick={send}>
        Send
      </button>
    </div>
  )
}
