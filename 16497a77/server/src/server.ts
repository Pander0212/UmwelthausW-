import app from './app'
import { config } from './config/env'
import logger from './utils/logger'

const port = config.PORT || 4000

const server = app.listen(port, () => {
  logger.info(`🚀 Server running on port ${port}`)
  logger.info(`📍 Environment: ${config.NODE_ENV}`)
  logger.info(`🌐 CORS Origin: ${config.CORS_ORIGIN}`)
})

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully')
  server.close(() => {
    logger.info('Process terminated')
    process.exit(0)
  })
})

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully')
  server.close(() => {
    logger.info('Process terminated')
    process.exit(0)
  })
})

export default server