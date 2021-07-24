import yaml from 'js-yaml'
import fs from 'fs'


export const addServerToSpec = (spec: string, servers: string[]) => {
  let fileContents = fs.readFileSync(spec, 'utf8');
  const data = yaml.load(fileContents) as Record<string, unknown>;

  data['servers'] = servers.map((server) => ({url: server}));

  return data
}