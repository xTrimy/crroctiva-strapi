import type { Attribute, Schema } from '@strapi/strapi';

export interface SharedFeature extends Schema.Component {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'Feature';
    icon: 'quote';
  };
  attributes: {
    content: Attribute.Text & Attribute.Required;
    icon: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

export interface SharedHero extends Schema.Component {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
    icon: 'dashboard';
  };
  attributes: {
    heroImage: Attribute.Media<'images'> & Attribute.Required;
    heroText: Attribute.Text;
    heroTitle: Attribute.String & Attribute.Required;
  };
}

export interface SharedInsight extends Schema.Component {
  collectionName: 'components_shared_insights';
  info: {
    description: '';
    displayName: 'Insight';
    icon: 'plus';
  };
  attributes: {
    number: Attribute.Integer;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedSection extends Schema.Component {
  collectionName: 'components_shared_sections';
  info: {
    displayName: 'Section';
    icon: 'layer';
  };
  attributes: {
    content: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.feature': SharedFeature;
      'shared.hero': SharedHero;
      'shared.insight': SharedInsight;
      'shared.section': SharedSection;
    }
  }
}
