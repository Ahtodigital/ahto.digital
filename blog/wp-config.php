<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ahto-wp-x4coujkQ');

/** MySQL database username */
define('DB_USER', 'UtBjx4UDOQ3r');

/** MySQL database password */
define('DB_PASSWORD', 'cucagado');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'e;t,Xj>4,(Y9p_D|%w-E%f;HG{(Ru)#Tl._*-xz>WY=~6p)9+CVF#AXayNt5^bZ;');
define('SECURE_AUTH_KEY',  '*b]5ReE&r;=n}oL{4DH<@ HNDOEFYb6,tprCD/7[Tp&90-c&@.#]}yPsLSCx#U6!');
define('LOGGED_IN_KEY',    'w4r=aY{B5aw^:]aSR1EW3B0{|m~!ck@(}s~BP8axCP=ySx[$Hg_*k1ON@[k5p%QX');
define('NONCE_KEY',        'J|(DJ<)a%+r/W&edy2x~2MH=$WG/5o)E%#?dXR;f@3!f)kQ-yn-9p*I_/8w`t204');
define('AUTH_SALT',        'N]l97=eNZ*vi^<aaB`Jo<4<HHg#b_1T]|-w#hj#/xe~<&@{m.EueEyeu5{(#Kvc}');
define('SECURE_AUTH_SALT', 'A.h79c3Qu+j4e[&e?&2z94w`2,#)^4jIcs&Nq{%:a38O)_+A6T8+pM+`g%XyJCgq');
define('LOGGED_IN_SALT',   '5RTR_kPAa)V.y/]SBOAy_eVk3Y,TfO@.t+RR|}wY_rhG&:4LHvG}H-^hWkC<D}84');
define('NONCE_SALT',       '$5Y7_|d Z`;s#0K&2)1t:lrJ=eWk(}K6&~q{JcVY]>Jg!pCch#$bcOr/CFG#$*3*');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ahto_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
