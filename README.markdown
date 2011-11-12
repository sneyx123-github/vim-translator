translator.vim
============

* [This is a mirror of vim.org](http://www.vim.org/scripts/script.php?script_id=3404)

This script allows you to translate text using the google online translator.
You can translate as single words and whole blocks using visual-mode.

Use `:Translate Hello World` to translate words or sentences
Note: With a large number of text program can take some time

Installation
------------

To use the translator you need to install Ruby and the VIM to support Ruby, or nodejs.
For version 1.2 and earlier you must also install gem json.

Configuration
-------------

The whole setting is made through a variable `g:goog_user_conf` in your vimrc file.

> `g:goog_user_conf` = {
    'langpair' : 'en|ru',
   `'v_key'` : 'T', "define key in visual-mode
    'charset' : 'koi8-r', "if need change encoding (use iconv)
    'cmd' : 'node' " or ruby (by default 'ruby')
  }

(version: 1.3.1b)
