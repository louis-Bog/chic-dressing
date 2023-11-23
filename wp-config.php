<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'chic_dressing' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'root' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         't.gH]lW[@9iHNzr1L8*>`4}D=NXq[oOcBBi{zzK:/Of;==M?:;vx`T)z@*{1b,YI' );
define( 'SECURE_AUTH_KEY',  'u6pFVL?gM#ci0K$!^ySu^Zk6TK)-M.<2!Ai2N).]p,_#F5hges<f}^QzXmn(mSj9' );
define( 'LOGGED_IN_KEY',    '$6p7n!.1.GTZPtR0I-d}1a<4EY aK3<ic.LTy*,J%(#=v&Qh+,|?CXgiVHCbT7b>' );
define( 'NONCE_KEY',        'm__1bFmhB N73_a8O4ep>3e@[Dx=O8W^E/Tu{pZovT@Ax:`hhy%RY6|%^J+alYpJ' );
define( 'AUTH_SALT',        'QP)!nU,GZSY-u3)x>]4NT;*c?P_P3V3>yz>b,o:)pC?Iu,ilX>BE}[@FL8nG?=p?' );
define( 'SECURE_AUTH_SALT', ']MY$W5UW^Z2V0b-_STh&,W5noN(n*.h`At^*7(0o;04G@%JhwEAT-)8ofky*,;L*' );
define( 'LOGGED_IN_SALT',   ':Y*+aquk8<$My<w2<}Scv$(Dsj4R$r&Mq8SJu_Qlu!}*O;vf=z>Dv, 4`oB{[@k}' );
define( 'NONCE_SALT',       'iox*T9)m$M4R:BX^Ga~Iw%49)cj1mZ/4W-}>i~z$!8;d8(vdOe}xH7mNh]`/</i=' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
