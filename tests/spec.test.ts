import 'jest'
import * as spec from '../lib/spec'
import * as path from 'path'
import * as fs from 'fs'


describe('test spec sever modifications', () => {
	it('should add server configurations', () => {
		const specPath = path.resolve(__dirname, './fixtures/openapi.yaml')
		const specWithServer = spec.addServerToSpec(specPath, ['https://foo.com'])

		expect(specWithServer).toHaveProperty('servers')
	})

	it('should have multiple servers set', () => {
		const specPath = path.resolve(__dirname, './fixtures/openapi.yaml')
		const specWithServer = spec.addServerToSpec(specPath, ['https://foo.com', 'https://dev.foo.com'])

		expect(specWithServer.servers).toHaveLength(2)
	})
})

describe('test save function', () => {
	it('should save the spec to disc', () => {
		const specPath = path.resolve(__dirname, './fixtures/openapi.yaml')
		const specWithServer = spec.addServerToSpec(specPath, ['https://foo.com'])

		spec.save(specWithServer, './spec.yaml')
		
		expect(fs.existsSync('./spec.yaml')).toBe(true)
	}) 

})