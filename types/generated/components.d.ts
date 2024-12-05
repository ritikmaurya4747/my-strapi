import type { Schema, Struct } from '@strapi/strapi';

export interface HeadingHeading extends Struct.ComponentSchema {
  collectionName: 'components_heading_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    title: Schema.Attribute.Text;
  };
}

export interface ImageImage extends Struct.ComponentSchema {
  collectionName: 'components_image_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true>;
  };
}

export interface LiLi extends Struct.ComponentSchema {
  collectionName: 'components_li_lis';
  info: {
    displayName: 'Li';
  };
  attributes: {
    li: Schema.Attribute.Text;
  };
}

export interface ParagraphBlockParagraphBlock extends Struct.ComponentSchema {
  collectionName: 'components_paragraph_block_paragraph_blocks';
  info: {
    description: '';
    displayName: 'Paragrap';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'heading.heading': HeadingHeading;
      'image.image': ImageImage;
      'li.li': LiLi;
      'paragraph-block.paragraph-block': ParagraphBlockParagraphBlock;
    }
  }
}
