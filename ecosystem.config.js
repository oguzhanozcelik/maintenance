module.exports = {
    apps: [
        {
            name: 'laviniacraft',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production',
            },
            exp_backoff_restart_delay: 100,
        },
    ],
};
