// TypeScript definitions for Discord Communities Technical Hub

interface CommunityConfig {
    name: string;
    invite: string;
    color: string;
    description: string;
}

interface AppConfig {
    communities: {
        [key: string]: CommunityConfig;
    };
    settings: {
        notificationDuration: number;
        connectionDelay: number;
        latencyUpdateInterval: number;
    };
}

interface NotificationOptions {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
}

interface SystemStatus {
    online: boolean;
    latency: number;
    protocol: 'HTTP' | 'HTTPS';
    lastUpdate: Date;
}

interface ConnectionState {
    community: string;
    status: 'idle' | 'connecting' | 'connected' | 'error';
    timestamp: Date;
}

// Type definitions for utility functions
type LogLevel = 'info' | 'warning' | 'error' | 'debug';

interface UtilityFunctions {
    generateLatency(): number;
    log(message: string, type?: LogLevel): void;
    isValidCommunity(community: string): boolean;
}

interface NotificationSystem {
    create(message: string, type?: 'success' | 'error' | 'warning' | 'info'): void;
}

interface ConnectionManager {
    connect(community: string): void;
}

interface SystemMonitor {
    updateLatency(): void;
    init(): void;
}

// Configuration constants
const COMMUNITY_TYPES = ['JKN', 'VAZAMENTOS'] as const;
type CommunityType = typeof COMMUNITY_TYPES[number];

const NOTIFICATION_TYPES = ['success', 'error', 'warning', 'info'] as const;
type NotificationType = typeof NOTIFICATION_TYPES[number];

const CONNECTION_STATES = ['idle', 'connecting', 'connected', 'error'] as const;
type ConnectionStatus = typeof CONNECTION_STATES[number];

// Default configuration
const DEFAULT_CONFIG: AppConfig = {
    communities: {
        JKN: {
            name: 'JKN',
            invite: 'https://discord.gg/YOUR_JKN_INVITE',
            color: '#58a6ff',
            description: 'Premium store community with specialized support'
        },
        VAZAMENTOS: {
            name: 'VAZAMENTOS',
            invite: 'https://discord.gg/YOUR_VAZAMENTOS_INVITE',
            color: '#f85149',
            description: 'Exclusive access community for premium content'
        }
    },
    settings: {
        notificationDuration: 3000,
        connectionDelay: 1500,
        latencyUpdateInterval: 5000
    }
};

// Interface for the main application
interface TechnicalHubApp {
    config: AppConfig;
    utils: UtilityFunctions;
    notifications: NotificationSystem;
    connections: ConnectionManager;
    monitor: SystemMonitor;
    init(): void;
}

// Export all types
export type {
    CommunityConfig,
    AppConfig,
    NotificationOptions,
    SystemStatus,
    ConnectionState,
    LogLevel,
    UtilityFunctions,
    NotificationSystem,
    ConnectionManager,
    SystemMonitor,
    CommunityType,
    NotificationType,
    ConnectionStatus,
    TechnicalHubApp
};

export {
    COMMUNITY_TYPES,
    NOTIFICATION_TYPES,
    CONNECTION_STATES,
    DEFAULT_CONFIG
};