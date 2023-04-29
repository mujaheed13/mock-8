# Food Delivery App

### To Register
```
/api/register
```

### To Login
```
POST /api/login
```

### To reset password
```
POST /api/user/:id/reset
```


### To get restaurants
```
PATCH /api/restaurants
```

### To get restaurant by ID
```
GET /api/restaurants/:id
```

### To get specifice restaurant's by ID menu
```
GET /api/restaurants/:id/menu
```
- here id refers to restaurant's id


### To add menu to a restaurant 
```
POST /api/restaurants/:id/menu
```
- here id refers to restaurant's id

### To delete a menu
```
DELETE /api/restaurants/:rest_id/menu/:menu_id
```

### To place a order 
```
POST api/orders
```

### To get Order
```
GET api/orders/:id
```

### To update the status of order
```
PATCH api/orders/:id
```
