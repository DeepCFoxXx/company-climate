# MongoDB Installation & Setup Guide (macOS)

This guide walks you through installing **MongoDB**, setting up **MongoDB Compass**, and connecting it to your local database.

---

## Step 1: Install MongoDB Community Edition via Homebrew

```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
```

---

## Step 2: Start MongoDB Service

To start the MongoDB server immediately and restart it at login:

```bash
brew services start mongodb/brew/mongodb-community@7.0
```

To stop it later:

```bash
brew services stop mongodb/brew/mongodb-community@7.0
```

---

## Step 3: Verify MongoDB Installation

To check your MongoDB version:

```bash
brew list --versions mongodb-community
```

Or for specific version info:

```bash
brew info mongodb-community@7.0
```

To check the MongoDB server binary version:

```bash
mongod --version
```

To check the MongoDB shell (CLI) version:

```bash
mongo --version
```

---

## Step 4: Install MongoDB Compass (GUI)

Download MongoDB Compass from the official site:

[https://www.mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass)

Once installed, open the app and connect to your local database with this URI:

```bash
mongodb://localhost:27017
```

Click **Connect** and you’ll see your databases.

---

## Notes

- Default MongoDB port: `27017`
- Default data directory: `/usr/local/var/mongodb`
- Default log file: `/usr/local/var/log/mongodb/mongo.log`
