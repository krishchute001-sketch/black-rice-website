export interface HealthResponse {
  status: string;
}

export type ConnectionState = 'Checking' | 'Connected' | 'Disconnected';
