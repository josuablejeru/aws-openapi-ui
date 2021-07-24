import yaml from 'js-yaml'
import fs from 'fs'


/**
 * @param spec: path to the spec file
 * @param servers: servers to add to spec
 * 
 * @returns new spec object with servers added
 */
export const addServerToSpec = (spec: string, servers: string[]): Record<string, unknown> => {
  let fileContents = fs.readFileSync(spec, 'utf8');
  const data = yaml.load(fileContents) as Record<string, unknown>;

  data['servers'] = servers.map((server) => ({url: server}));

  return data
}

/**
 * save the spec object to disc
 */
export const save = (spec: Record<string, unknown>, path: string) => {
  const dump = yaml.dump(spec, {indent: 2})
  fs.writeFileSync(path, dump)
}