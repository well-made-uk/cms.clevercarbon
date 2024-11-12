---
title: Hello :))
content: >-
  This means:


  media_folder: Refers to the location of uploaded files (e.g., images) that you upload using your content management system (Decap CMS). The path is relative to your project's root directory.


  public_folder: Specifies the folder path where the files uploaded through the CMS are accessed on your front-end site. The paths to the files will be stored in your content files as relative paths based on the public_folder setting.


  So, any image files you add directly to the "site/static/images" folder should indeed become available to your CMS and should also be accessible to be embedded on your front-end site from the "images" path.


  However, note that how these settings work can depend on the configuration of your static site generator and your build environment.


  It's important to remember that changes made directly to the media_folder may not display on the CMS immediately, you may need to wait for a cache update or manually trigger it.


  This behavior is expected because, by default, Netlify CMS (and similarly decap CMS) loads the media library in entirety upon opening, displaying assets as they existed when it was launched. Changes made to the media folder while the CMS is open are not immediately reflected in the media and content libraries.


  To update the libraries without refreshing the CMS, you can use the refresh button in the Media Library toolbar.


  You can refer to the Decap CMS or Netlify CMS documentation or community for more detailed and specific guidance on your particular settings and CMS version.
bits_and_pieces: true
header_left: images/1.svg
header_right: images/2.svg
---
The netlify-cms stores content in Markdown files which are structured with front matter fields plus content. Therefore, you should ensure that the content of these markdown files is captured under the body field when configuring your netlify-cms.

1. First thing
2. Second thing
3. Third thing

Your current setup may likely be storing the content under content field in the frontmatter, which is why .Content does not display anything.

## This heading :)))

To solve this, you might want to change your netlify-cms configuration from;

The netlify-cms stores content in Markdown files which are structured with front matter fields plus content. Therefore, you should ensure that the content of these markdown files is captured under the body field when configuring your netlify-cms.

1. First thing
2. Second thing
3. Third thing

Your current setup may likely be storing the content under content field in the frontmatter, which is why .Content does not display anything.

## This heading :)))

To solve this, you might want to change your netlify-cms configuration from;

The netlify-cms stores content in Markdown files which are structured with front matter fields plus content. Therefore, you should ensure that the content of these markdown files is captured under the body field when configuring your netlify-cms.

1. First thing
2. Second thing
3. Third thing

Your current setup may likely be storing the content under content field in the frontmatter, which is why .Content does not display anything.

## This heading :)))

To solve this, you might want to change your netlify-cms configuration from;

The netlify-cms stores content in Markdown files which are structured with front matter fields plus content. Therefore, you should ensure that the content of these markdown files is captured under the body field when configuring your netlify-cms.

1. First thing
2. Second thing
3. Third thing

Your current setup may likely be storing the content under content field in the frontmatter, which is why .Content does not display anything.

## This heading :)))

To solve this, you might want to change your netlify-cms configuration from;

The netlify-cms stores content in Markdown files which are structured with front matter fields plus content. Therefore, you should ensure that the content of these markdown files is captured under the body field when configuring your netlify-cms.

1. First thing
2. Second thing
3. Third thing

Your current setup may likely be storing the content under content field in the frontmatter, which is why .Content does not display anything.

## This heading :)))

To solve this, you might want to change your netlify-cms configuration from;