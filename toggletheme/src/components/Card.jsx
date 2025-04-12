import React from 'react'

function Card() {
  return (
    <>
    <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
  <img class="w-full rounded-xl" src="https://via.placeholder.com/400x200" alt="Card image" />
  <div class="px-2 py-4">
    <h2 class="font-bold text-xl mb-2 text-gray-800">Card Title</h2>
    <p class="text-gray-600 text-base">
      This is a simple card component using Tailwind CSS. Customize it however you like!
    </p>
  </div>
  <div class="px-2 pt-4 pb-2">
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300">
      Action
    </button>
  </div>
</div>

    
    
    </>
  )
}

export default Card