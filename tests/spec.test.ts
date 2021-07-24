import 'jest'
import * as spec from '../lib/spec'
import * as path from 'path'


describe('test spec modifications', () => {
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
