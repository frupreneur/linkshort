<?php
/*
Plugin Name: Update Post Dates
Description: Updates the dates of all posts starting from the most recent post.
Version: 1.0
Author: Your Name
*/

function update_post_dates() {
    // Get all published posts ordered by date in descending order
    $args = array(
        'post_type' => 'post',
        'post_status' => 'publish',
        'orderby' => 'date',
        'order' => 'DESC',
        'posts_per_page' => -1, // Get all posts
    );
    $posts_query = new WP_Query($args);

    // Get the current date
    $current_date = date('Y-m-d');

    // Loop through each post and update its date
    if ($posts_query->have_posts()) {
        $days_diff = 0;
        while ($posts_query->have_posts()) {
            $posts_query->the_post();
            // Update post date
            $post_id = get_the_ID();
            $new_date = date('Y-m-d', strtotime("-$days_diff days", strtotime($current_date)));
            wp_update_post(array(
                'ID' => $post_id,
                'post_date' => $new_date,
                'post_date_gmt' => $new_date . ' 00:00:00',
            ));
            $days_diff++;
        }
    }

    // Reset post data
    wp_reset_postdata();
}

// Schedule the function to run daily
function schedule_update_post_dates() {
    if (!wp_next_scheduled('update_post_dates_event')) {
        wp_schedule_event(time(), 'daily', 'update_post_dates_event');
    }
}
add_action('wp', 'schedule_update_post_dates');

// Hook into scheduled event
add_action('update_post_dates_event', 'update_post_dates');
?>
