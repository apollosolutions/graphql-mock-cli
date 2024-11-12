import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('mock', () => {
  it('expects a file to be passed as an arg', async () => {
    const { error } = await runCommand('mock')
    expect(error).not.empty;
  })

  it('fails if given a invalid file location', async () => {
    const { error, stdout } = await runCommand('mock invalid.graphql');
    expect(stdout).to.contain('Reading schema file invalid.graphql');
    expect(error).not.empty;
  })

  // This starts a server and I haven't figured yet how to best kill the server
  /*
  it('starts a server if given a valid file location', async () => {
    const { stdout, error } = await runCommand('mock test/commands/mock/schema.graphql');
    expect(stdout).to.contain('Reading schema file test/commands/mock/schema.graphql');
    expect(error).to.be.undefined;
  })
  */
})
