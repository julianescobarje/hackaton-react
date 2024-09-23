import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Checkbox from './Checkbox'

import passwordGif from '../assets/gif/password.gif'
import copyIcon from '../assets/icons/copy.svg'
import refreshIcon from '../assets/icons/refresh.svg'

import './PasswordGenerator.css'

function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(10)
  const [password, setPassword] = useState('B9QI4PDBYY')
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true)

  const onChangePasswordLength = (value) => {
    setPasswordLength(value)
  }

  const generatePassword = (length) => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?'

    let characterPool = ''
    if (includeUppercase) characterPool += uppercase
    if (includeLowercase) characterPool += lowercase
    if (includeNumbers) characterPool += numbers
    if (includeSpecialChars) characterPool += specialChars

    if (characterPool.length === 0) return

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length)
      generatedPassword += characterPool[randomIndex]
    }

    setPassword(generatedPassword)
  }

  const handleRefresh = () => {
    generatePassword(passwordLength)
  }

  useEffect(() => {
    generatePassword(passwordLength)
  }, [passwordLength])

  return (
    <div className='password-wrapper'>
      <div className='gif'>
        <img src={passwordGif} alt='Password Gif' />
      </div>
      <div className='tac'>
        <h2 className='title'>PASSWORD GENERATOR</h2>
        <p className='subtitle'>
          Ensure online account safety by creating strong and secure passwords
        </p>
      </div>
      <div className='password-input-wrapper'>
        <div className='password-field'>
          <input
            type='text'
            placeholder='your password'
            value={password}
            readOnly
          />
          <img
            src={refreshIcon}
            alt='refresh the password'
            onClick={handleRefresh}
          />
        </div>
        <CopyToClipboard text={password}>
          <button className='copy-btn'>
            <img src={copyIcon} alt='copy password' />
            Copy
          </button>
        </CopyToClipboard>
      </div>
      <span className='fw-500'>Weak</span>
      <div className='slider'>
        <div>
          <label id='slider-label'>Password Length: </label>
          <span>{passwordLength}</span>
        </div>
        <Slider
          max={30}
          min={5}
          value={passwordLength}
          onChange={onChangePasswordLength}
          className='slider-style'
        />
      </div>
      <div className='elements'>
        <Checkbox
          id='uppercase'
          label='Uppercase'
          checked={includeUppercase}
          onChange={() => {
            setIncludeUppercase(!includeUppercase)
            generatePassword(passwordLength)
          }}
        />
        <Checkbox
          id='lowercase'
          label='Lowercase'
          checked={includeLowercase}
          onChange={() => {
            setIncludeLowercase(!includeLowercase)
            generatePassword(passwordLength)
          }}
        />
        <Checkbox
          id='numbers'
          label='Numbers'
          checked={includeNumbers}
          onChange={() => {
            setIncludeNumbers(!includeNumbers)
            generatePassword(passwordLength)
          }}
        />
        <Checkbox
          id='special-chars'
          label='Special Characters'
          checked={includeSpecialChars}
          onChange={() => {
            setIncludeSpecialChars(!includeSpecialChars)
            generatePassword(passwordLength)
          }}
        />
      </div>
    </div>
  )
}

export default PasswordGenerator
