import * as fs from 'fs'

/**
 *  Package the openapi config
 * @param {string} openapiFile - The openapi file
 */
export const copyFile = (src: string, dest: string) => {
    try {
        console.log(`copy: ${src} | to: ${dest}`)
        fs.copyFileSync(src, dest)
    } catch (err) {
        console.log(err)
    }
}