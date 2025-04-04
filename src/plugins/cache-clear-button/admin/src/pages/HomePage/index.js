/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { Button } from '@strapi/design-system'
import { Upload } from '@strapi/icons'
const HomePage = () => {
  let baseUrl = process.env.STRAPI_ADMIN_CACHE_HOST
  if (baseUrl.endsWith('/')) {
    baseUrl = baseUrl.slice(0, -1);
  }
  // remove leading slash
  if (baseUrl.startsWith('/')) {
    baseUrl = baseUrl.slice(1);
  }

  return (
    
    <div style={{ padding: '20px' }}>
      <Button
        variant="secondary"
        startIcon={<Upload />}
        onClick={() => {
          fetch(baseUrl+'/cache-clear', { method: 'POST' })
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                alert('Cache cleared successfully!')
              } else {
                alert('Failed to clear cache.')
              }
            })
            .catch(() => {
              alert('An error occurred while clearing the cache.')
            })
        }}
      >
        Clear Cache
      </Button>
    </div>
  );
};

export default HomePage;
