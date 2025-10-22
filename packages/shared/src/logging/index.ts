// Shared logging utilities using react-native-logs
import { logger as RNLogger } from 'react-native-logs';

// Log levels enum for consistency
export enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

// Logger interface for Clean Architecture
export interface Logger {
  debug(message: string, ...args: unknown[]): void;
  info(message: string, ...args: unknown[]): void;
  warn(message: string, ...args: unknown[]): void;
  error(message: string, ...args: unknown[]): void;
}

// React Native Logs implementation
export class ReactNativeLogger implements Logger {
  private logger = RNLogger.createLogger({
    severity: 'debug',
  });

  debug(message: string, ...args: unknown[]): void {
    this.logger.debug(message, ...args);
  }

  info(message: string, ...args: unknown[]): void {
    this.logger.info(message, ...args);
  }

  warn(message: string, ...args: unknown[]): void {
    this.logger.warn(message, ...args);
  }

  error(message: string, ...args: unknown[]): void {
    this.logger.error(message, ...args);
  }
}

// Export the logger instance
export const logger = new ReactNativeLogger();
