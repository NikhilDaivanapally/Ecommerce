const express = require("express");
const expressSession = require("express-session");
const cors = require("cors");
const passport = require("./utils/passport.localStrategy");
const app = express();
const authRoutes = require("../src/routes/auth.route");
const productRoutes = require("../src/routes/products.route");
const wishlistRoutes = require("../src/routes/wishlist.route");
const cartRoutes = require("../src/routes/cart.route");
const categoryRoutes = require("../src/routes/category.route");
const userRouter = require("../src/routes/user.route");
const Category = require("./models/category.model");
const Product = require("./models/product.model");
const Cart = require("./models/cart.model");
const CartItem = require("./models/cartItem.model");
const User = require("./models/user.model");
const OrderItem = require("./models/OrderItem.model");
const Order = require("./models/order.model");
const Wishlist = require("./models/wishlist.model");
const WishlistItem = require("./models/wishlistItem.model");

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ecommerce-nikhil-daivanapallys-projects.vercel.app",
    ],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "asdflkj",
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Your Backend seems to be working fine 👍" });
});

// auth Routes
app.use("/api/v1/auth", authRoutes);

// product Routes
app.use("/api/v1/products", productRoutes);

// category Routes
app.use("/api/v1/categories", categoryRoutes);

//user Routes
app.use("/api/v1/users", userRouter);

// cart Routes
app.use("/api/v1/cart", cartRoutes);

//wishlist Routes
app.use("/api/v1/wishlist", wishlistRoutes);

Category.hasMany(Product);
Category.belongsTo(User);

Product.belongsTo(Category);
Product.belongsTo(User);
Product.belongsToMany(Cart, { through: CartItem });
Product.belongsToMany(Order, { through: OrderItem });
Product.belongsToMany(Wishlist, { through: WishlistItem });

User.hasMany(Product);
User.hasMany(Category);
User.hasOne(Cart);
User.hasOne(Wishlist);
User.hasMany(Order);

Wishlist.belongsTo(User);
Wishlist.belongsToMany(Product, { through: WishlistItem });
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });

Order.belongsTo(User);
Order.belongsToMany(Product, { through: OrderItem });

module.exports = app;
