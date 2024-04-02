import { createLogger, format, transports } from 'winston';

// Configure the logger
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ level, message, timestamp }) => `${timestamp} ${level.toUpperCase()}: ${message}`)
  ),
  transports: [
    new transports.File({ filename: '/var/log/http-server.log' }),
  ],
});

export default logger;