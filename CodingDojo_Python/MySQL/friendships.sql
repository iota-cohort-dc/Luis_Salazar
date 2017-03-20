SELECT users.first_name, users.last_name,comments.messages_id, comments.comment, comments.created_at
FROM users 
JOIN comments ON users.id = comments.id 


