# k8s-interactive MCP Server

a MCP server that can run k8s command and given the kubeconfig path. And can provide interpretation of the command output.

## Features

### Resources
NA

### Tools
- `run_kubectl_command` - Run kubectl command and return the output
  - Takes kubectl command and kubeconfig path as required parameters

### Prompts
NA

## Development

Install dependencies:
```bash
npm install
```

Build the server:
```bash
npm run build
```

For development with auto-rebuild:
```bash
npm run watch
```

## Installation

To use with Claude Desktop, add the server config:

On MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "k8s-interactive": {
      "command": "/path/to/k8s-interactive/build/index.js"
    }
  }
}
```

### Debugging

Since MCP servers communicate over stdio, debugging can be challenging. We recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector), which is available as a package script:

```bash
npm run inspector
```

The Inspector will provide a URL to access debugging tools in your browser.
