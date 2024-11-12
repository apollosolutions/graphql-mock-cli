@apollosolutions/graphql-mock-cli
=================
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

Mock a GraphQL schema in one command

**The code in this repository is experimental and has been provided for reference purposes only. Community feedback is welcome but this project may not be supported in the same way that repositories in the official [Apollo GraphQL GitHub organization](https://github.com/apollographql) are. If you need help you can file an issue on this repository, [contact Apollo](https://www.apollographql.com/contact-sales) to talk to an expert, or create a ticket directly in Apollo Studio.**

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
You can run the CLI using NPX directly on the repo.

```sh-session
$ npx github:@apollosolutions/graphql-mock-cli COMMAND
running command...

$ npx github:@apollosolutions/graphql-mock-cli --version
@apollosolutions/graphql-mock-cli/0.0.1 darwin-arm64 node-v22.11.0

$ npx github:@apollosolutions/graphql-mock-cli --help [COMMAND]
USAGE
  $ graphql-mock-cli COMMAND
...
```
# Commands
<!-- commands -->
* [`graphql-mock-cli help [COMMAND]`](#graphql-mock-cli-help-command)
* [`graphql-mock-cli mock SCHEMA`](#graphql-mock-cli-mock-schema)
* [`graphql-mock-cli plugins`](#graphql-mock-cli-plugins)
* [`graphql-mock-cli plugins add PLUGIN`](#graphql-mock-cli-plugins-add-plugin)
* [`graphql-mock-cli plugins:inspect PLUGIN...`](#graphql-mock-cli-pluginsinspect-plugin)
* [`graphql-mock-cli plugins install PLUGIN`](#graphql-mock-cli-plugins-install-plugin)
* [`graphql-mock-cli plugins link PATH`](#graphql-mock-cli-plugins-link-path)
* [`graphql-mock-cli plugins remove [PLUGIN]`](#graphql-mock-cli-plugins-remove-plugin)
* [`graphql-mock-cli plugins reset`](#graphql-mock-cli-plugins-reset)
* [`graphql-mock-cli plugins uninstall [PLUGIN]`](#graphql-mock-cli-plugins-uninstall-plugin)
* [`graphql-mock-cli plugins unlink [PLUGIN]`](#graphql-mock-cli-plugins-unlink-plugin)
* [`graphql-mock-cli plugins update`](#graphql-mock-cli-plugins-update)

## `graphql-mock-cli help [COMMAND]`

Display help for graphql-mock-cli.

```
USAGE
  $ graphql-mock-cli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for graphql-mock-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.16/src/commands/help.ts)_

## `graphql-mock-cli mock SCHEMA`

Start a mock GraphQL server from a file

```
USAGE
  $ graphql-mock-cli mock SCHEMA [--port <value>]

ARGUMENTS
  SCHEMA  Schema file to mock

FLAGS
  --port=<value>  [default: 4000] HTTP port for server

DESCRIPTION
  Start a mock GraphQL server from a file

EXAMPLES
  $ graphql-mock-cli mock schema.graphql

  $ graphql-mock-cli mock schema.graphql --port 8080
```

_See code: [src/commands/mock/index.ts](https://github.com/apollosolutions/graphql-mock-cli/blob/v0.0.1/src/commands/mock/index.ts)_

## `graphql-mock-cli plugins`

List installed plugins.

```
USAGE
  $ graphql-mock-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ graphql-mock-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/index.ts)_

## `graphql-mock-cli plugins add PLUGIN`

Installs a plugin into graphql-mock-cli.

```
USAGE
  $ graphql-mock-cli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into graphql-mock-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the GRAPHQL_MOCK_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the GRAPHQL_MOCK_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ graphql-mock-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ graphql-mock-cli plugins add myplugin

  Install a plugin from a github url.

    $ graphql-mock-cli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ graphql-mock-cli plugins add someuser/someplugin
```

## `graphql-mock-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ graphql-mock-cli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ graphql-mock-cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/inspect.ts)_

## `graphql-mock-cli plugins install PLUGIN`

Installs a plugin into graphql-mock-cli.

```
USAGE
  $ graphql-mock-cli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into graphql-mock-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the GRAPHQL_MOCK_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the GRAPHQL_MOCK_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ graphql-mock-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ graphql-mock-cli plugins install myplugin

  Install a plugin from a github url.

    $ graphql-mock-cli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ graphql-mock-cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/install.ts)_

## `graphql-mock-cli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ graphql-mock-cli plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ graphql-mock-cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/link.ts)_

## `graphql-mock-cli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ graphql-mock-cli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ graphql-mock-cli plugins unlink
  $ graphql-mock-cli plugins remove

EXAMPLES
  $ graphql-mock-cli plugins remove myplugin
```

## `graphql-mock-cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ graphql-mock-cli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/reset.ts)_

## `graphql-mock-cli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ graphql-mock-cli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ graphql-mock-cli plugins unlink
  $ graphql-mock-cli plugins remove

EXAMPLES
  $ graphql-mock-cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/uninstall.ts)_

## `graphql-mock-cli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ graphql-mock-cli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ graphql-mock-cli plugins unlink
  $ graphql-mock-cli plugins remove

EXAMPLES
  $ graphql-mock-cli plugins unlink myplugin
```

## `graphql-mock-cli plugins update`

Update installed plugins.

```
USAGE
  $ graphql-mock-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/update.ts)_
<!-- commandsstop -->
