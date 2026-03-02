#!/bin/sh
set -eu

cat > /usr/share/nginx/html/env.js <<EOF
window.__APP_CONFIG__ = {
  APP_VERSION: "${APP_VERSION:-unknown}",
  APP_COMMIT: "${APP_COMMIT:-unknown}"
};
EOF

exec nginx -g 'daemon off;'
