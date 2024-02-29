import {Inter, ABeeZee, Amaranth} from 'next/font/google'

const fontInter = Inter({
     subsets: ['latin'],
     weight: ['400', '500', '600']
 })
const fontABeeze = ABeeZee({
    subsets:['latin'],
    weight: '400'
})

export {fontABeeze, fontInter}