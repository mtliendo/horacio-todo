import React from 'react'

function Footer() {
  return (
    <footer className="mx-auto max-w-3xl text-center">
      <p>
        Developed by{' '}
        <a
          className="text-blue-500 hover:underline"
          href="https://twitter.com/mtliendo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Michael Liendo
        </a>{' '}
        and{' '}
        <a
          className="text-blue-500 hover:underline"
          href="https://twitter.com/hhg2288"
          target="_blank"
          rel="noopener noreferrer"
        >
          Horacio Herrera
        </a>{' '}
        with{' '}
        <span role="img" aria-label="red heart">
          ❤️
        </span>
      </p>
      <p className="text-orange-500 font-bold">
        AWS Amplify Community Builders
      </p>
    </footer>
  )
}

export default Footer
