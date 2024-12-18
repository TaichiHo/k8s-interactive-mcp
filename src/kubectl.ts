import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export class Kubectl {
  private kubeconfig: string;

  constructor(kubeconfig: string) {
    this.kubeconfig = kubeconfig;
  }

  async run(command?: string): Promise<{ title: string; output: string }> {
    if (!command) {
      throw new Error('Command is required');
    }

    try {
      // First check if kubectl is installed
      try {
        await execAsync('which kubectl');
      } catch (error) {
        return {
          title: 'kubectl not found',
          output: 'kubectl is not installed or not in PATH. Please install kubectl first: https://kubernetes.io/docs/tasks/tools/'
        };
      }

      const { stdout, stderr } = await execAsync(`KUBECONFIG=${this.kubeconfig} ${command}`);
      return {
        title: `${command}`,
        output: stdout || stderr
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          title: `${command} (error)`,
          output: error.message
        };
      }
      throw error;
    }
  }
} 