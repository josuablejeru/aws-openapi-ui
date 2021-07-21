import * as fs from 'fs'
import * as path from 'path'

/**
 *  Package the openapi config
 * @param {string} openapiFile - The openapi file
 * 
 * TODO: accept also .yml format
 */
export const packageOpenapi = (src: string, dest: string) => {
    try {
        console.log(`copy: ${src} | to: ${dest}`)
        fs.copyFileSync(src, dest)
    } catch (err) {
        console.log(err)
    }
}