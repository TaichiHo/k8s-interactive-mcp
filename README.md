# k8s-interactive-mcp

A MCP server that can run Kubernetes commands with a given kubeconfig path and provide interpretation of the commands.

<a href="https://glama.ai/mcp/servers/gwvs0s78be"><img width="380" height="200" src="https://glama.ai/mcp/servers/gwvs0s78be/badge" alt="k8s-interactive-mcp MCP server" /></a>

## Demo

Watch the demo video:

[![k8s-interactive demo](https://img.shields.io/badge/Watch-Demo%20Video-blue)](https://drive.google.com/file/d/1DJKYrWILKkAq6UyVraMFOd_1t68xAvug/view?usp=drive_link)

## Features

- Run kubectl commands through MCP tools
- Automatic kubectl installation check
- Support for custom kubeconfig paths
- Error handling and helpful messages

## Usage

1. Install dependencies:
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
