import { Request, Response } from 'express'

export interface HttpServiceInterface {
  callAuthServer(request: Request, response: Response, endpoint: string, payload?: Record<string, unknown>): Promise<void>
  callAuthServerWithLegacyFormat(request: Request, response: Response, endpoint: string, payload?: Record<string, unknown>): Promise<void>
  callSyncingServer(request: Request, response: Response, endpoint: string, payload?: Record<string, unknown>): Promise<void>
  callLegacySyncingServer(request: Request, response: Response, endpoint: string, payload?: Record<string, unknown>): Promise<void>
}
