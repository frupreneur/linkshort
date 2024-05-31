<?php
/*
Plugin Name: Post URL JS Array Generator
Description: This plugin generates a JavaScript array with URLs of all posts on the site.
Version: 1.0
Author: Your Name
*/

// Add a menu item to the dashboard
add_action('admin_menu', 'post_url_js_array_menu');

function post_url_js_array_menu() {
    add_menu_page('Post URL JS Array', 'Post URL JS Array', 'manage_options', 'post-url-js-array', 'post_url_js_array_page');
}

// Function to generate the JS array and display it on the plugin's page
function post_url_js_array_page() {
    global $wpdb;

    $post_urls = get_post_urls_js_array($wpdb); // Get an array of post URLs
    ?>
    <div class="wrap">
        <h2>Post URL JS Array</h2>
        <p>Copy the following JavaScript array containing URLs of all posts on your site:</p>
        <textarea rows="10" cols="50" readonly><?php echo esc_textarea(json_encode($post_urls, JSON_UNESCAPED_SLASHES)); ?></textarea>
    </div>
    <?php
}

// Function to get an array of post URLs
function get_post_urls_js_array($wpdb) {
    $post_urls = array();
    $query = "SELECT post_name FROM $wpdb->posts WHERE post_type = 'post' AND post_status = 'publish'";
    $results = $wpdb->get_results($query);
    if ($results) {
        foreach ($results as $result) {
            $post_urls[] = get_permalink(get_page_by_path($result->post_name));
        }
    }
    return $post_urls;
}
