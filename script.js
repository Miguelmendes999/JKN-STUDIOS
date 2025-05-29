// Motion library setup
const { motion, animate } = Motion;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initSystemMonitoring();
});

// Animation sequence
function initializeAnimations() {
    // Title animation with enhanced effects
    animate('#title', 
        { 
            opacity: [0, 1], 
            y: [50, 0],
            scale: [0.8, 1]
        }, 
        { duration: 1.2, delay: 0.3, ease: "easeOut" }
    );
    
    // Subtitle animation
    animate('#subtitle', 
        { 
            opacity: [0, 1], 
            y: [30, 0] 
        }, 
        { duration: 1, delay: 0.6, ease: "easeOut" }
    );

    // Status animation
    animate('#status', 
        { 
            opacity: [0, 1], 
            y: [20, 0] 
        }, 
        { duration: 0.8, delay: 0.8, ease: "easeOut" }
    );
    
    // JKN Card animation
    animate('#jknCard', 
        { 
            opacity: [0, 1], 
            x: [-80, 0],
            rotateY: [15, 0]
        }, 
        { duration: 1, delay: 1.0, ease: "easeOut" }
    );
    
    // VAZAMENTOS Card animation
    animate('#vazamentosCard', 
        { 
            opacity: [0, 1], 
            x: [80, 0],
            rotateY: [-15, 0]
        }, 
        { duration: 1, delay: 1.2, ease: "easeOut" }
    );
    
    // Footer animation
    animate('#footer', 
        { 
            opacity: [0, 1], 
            scale: [0.9, 1] 
        }, 
        { duration: 0.8, delay: 1.6, ease: "easeOut" }
    );
}

// System monitoring
function initSystemMonitoring() {
    updateSystemStatus();
    setInterval(updateSystemStatus, 10000); // Update every 10 seconds
}

function updateSystemStatus() {
    const latency = Math.floor(Math.random() * 10) + 8; // 8-18ms
    const uptime = (99.95 + Math.random() * 0.04).toFixed(2); // 99.95-99.99%
    
    const statusElement = document.getElementById('status');
    if (statusElement) {
        statusElement.innerHTML = `
            <div class="status-dot"></div>
            System Status: Online • Latency: < ${latency}ms • Uptime: ${uptime}%
        `;
    }
    
    // Console log for technical monitoring
    console.log(`[${new Date().toISOString()}] SYSTEM STATUS UPDATE`);
    console.log(`├─ Status: OPERATIONAL`);
    console.log(`├─ Latency: ${latency}ms`);
    console.log(`├─ Uptime: ${uptime}%`);
    console.log(`└─ Next check: ${new Date(Date.now() + 10000).toISOString()}`);
}

// Discord redirect function
function openDiscord(community) {
    const button = event.target.closest('button');
    const originalText = button.innerHTML;
    
    // Technical logging
    console.log(`[${new Date().toISOString()}] CONNECTION INITIATED`);
    console.log(`├─ Target: ${community}`);
    console.log(`├─ Protocol: HTTPS/WSS`);
    console.log(`├─ Auth: OAuth 2.0`);
    console.log(`└─ Status: ESTABLISHING...`);
    
    // Enhanced button press animation
    animate(button, 
        { 
            scale: [1, 0.95, 1.02, 1],
            rotateZ: [0, -1, 1, 0]
        }, 
        { duration: 0.4, ease: "easeInOut" }
    );
    
    // Update button state
    button.innerHTML = '<span>ESTABLISHING CONNECTION...</span>';
    button.disabled = true;
    
    // Show technical notification
    showTechnicalNotification(community);
    
    // Enhanced ripple effect
    createEnhancedRipple(event, button, community);
    
    // Redirect after delay
    setTimeout(() => {
        if (community === 'JKN') {
            window.open('https://discord.gg/YOUR_JKN_INVITE', '_blank');
        } else if (community === 'VAZAMENTOS') {
            window.open('https://discord.gg/YOUR_VAZAMENTOS_INVITE', '_blank');
        }
        
        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;
        
        // Success log
        console.log(`[${new Date().toISOString()}] CONNECTION ESTABLISHED`);
        console.log(`├─ Target: ${community}`);
        console.log(`├─ Status: SUCCESS`);
        console.log(`└─ Session: ACTIVE`);
        
    }, 2000);
}

// Technical notification system
function showTechnicalNotification(community) {
    const notification = document.createElement('div');
    const isJKN = community === 'JKN';
    
    notification.className = `${isJKN ? 'notification' : 'notification-dark'} fixed top-8 right-8 p-6 rounded-2xl z-50 opacity-0 min-w-96`;
    
    const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
    
    notification.innerHTML = `
        <div class="flex items-start gap-4">
            <div class="relative mt-1">
                <div class="w-3 h-3 rounded-full ${isJKN ? 'bg-green-500' : 'bg-cyan-400'} animate-pulse"></div>
                <div class="absolute inset-0 w-3 h-3 rounded-full ${isJKN ? 'bg-green-500' : 'bg-cyan-400'} animate-ping opacity-30"></div>
            </div>
            <div class="flex-1">
                <div class="font-bold text-lg ${isJKN ? 'text-black' : 'text-white'} mb-1">
                    CONNECTION PROTOCOL ACTIVE
                </div>
                <div class="text-sm ${isJKN ? 'text-gray-700' : 'text-gray-300'} font-mono">
                    Target: ${community}<br>
                    Time: ${timestamp} UTC<br>
                    Status: Authenticating...
                </div>
            </div>
            <svg class="w-6 h-6 ${isJKN ? 'text-black' : 'text-white'} mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate notification
    animate(notification, 
        { 
            opacity: [0, 1], 
            x: [100, 0], 
            scale: [0.8, 1],
            rotateY: [20, 0]
        }, 
        { duration: 0.5, ease: "easeOut" }
    );
    
    // Remove after 4 seconds
    setTimeout(() => {
        animate(notification, 
            { 
                opacity: [1, 0], 
                x: [0, 100], 
                scale: [1, 0.8],
                rotateY: [0, -20]
            }, 
            { duration: 0.4, ease: "easeIn" }
        ).then(() => {
            notification.remove();
        });
    }, 4000);
}

// Enhanced ripple effect
function createEnhancedRipple(event, button, community) {
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.5;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('div');
    const isJKN = community === 'JKN';
    
    ripple.style.position = 'absolute';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = isJKN ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)';
    ripple.style.pointerEvents = 'none';
    ripple.style.transform = 'scale(0)';
    ripple.style.zIndex = '10';
    
    button.appendChild(ripple);
    
    animate(ripple, 
        { 
            scale: [0, 1], 
            opacity: [0.6, 0] 
        }, 
        { duration: 0.8, ease: "easeOut" }
    ).then(() => {
        ripple.remove();
    });
}

// Enhanced hover effects
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            animate(this, 
                { 
                    y: [0, -8], 
                    scale: [1, 1.02],
                    rotateX: [0, 2]
                }, 
                { duration: 0.4, ease: "easeOut" }
            );
        });
        
        card.addEventListener('mouseleave', function() {
            animate(this, 
                { 
                    y: [-8, 0], 
                    scale: [1.02, 1],
                    rotateX: [2, 0]
                }, 
                { duration: 0.4, ease: "easeOut" }
            );
        });
    });
    
    // Enhanced button hover effects
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            animate(this, 
                { 
                    scale: [1, 1.03],
                    y: [0, -2]
                }, 
                { duration: 0.2, ease: "easeOut" }
            );
        });
        
        button.addEventListener('mouseleave', function() {
            animate(this, 
                { 
                    scale: [1.03, 1],
                    y: [-2, 0]
                }, 
                { duration: 0.2, ease: "easeOut" }
            );
        });
    });
});

// Console initialization
console.log(`
╔══════════════════════════════════════════════════════════╗
║                DISCORD CLOUD INFRASTRUCTURE              ║
║                  Technical Interface v2.0                ║
║══════════════════════════════════════════════════════════║
║  Status: ONLINE          │  Env: Production             ║
║  Latency: <15ms          │  SSL: TLS 1.3                ║
║  Uptime: 99.99%          │  CDN: Global                 ║
╚══════════════════════════════════════════════════════════╝
`);

console.log('[SYSTEM] Discord Cloud Infrastructure initialized');
console.log('[SYSTEM] All services operational');
console.log('[SYSTEM] Monitoring active');