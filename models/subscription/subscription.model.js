import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Subscription name is required"],
      trim: true,
      minlength: [2, "Subscription name must be at least 2 characters"],
      maxlength: [255, "Subscription name is too long"],
    },

    price: {
      type: Number,
      required: [true, "Subscription price is required"],
      min: [0, "Price must be greater than 0"],
    },

    currency: {
      type: String,
      enum: ["USD", "EUR", "PHP"],
      default: "PHP",
    },

    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly"],
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "sports",
        "news",
        "entertainment",
        "lifestyle",
        "techonology",
        "finance",
        "politics",
        "others",
      ],
    },

    paymentMethod: {
      type: String,
      trim: true,
      required: [true, "Payment method is required"],
    },

    status: {
      type: String,
      enum: ["active", "cancelled", "expired"],
      default: "active",
    },

    startDate: {
      type: Date,
      required: [true, "Date start is required"],
      validate: {
        validator: (value) => value <= new Date(),
        message: "Start date must be in the past",
      },
    },

    renewalDate: {
      type: Date,
      required: [true, "Renewal date is required"],
      validate: {
        validator: function (value) {
          return value > this.startDate;
        },
        message: "Renewal date must be after the start date",
      },
    },

    user: {
      type: mongoose.schema,
    },
  },
  {
    timestamps: true,
  },
);

subscriptionSchema.pre("save", function (next) {
  if (!this.renewalDate) {
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      montly: 30,
      yearly: 365,
    };

    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(
      this.renewalDate.getDate() + renewalPeriods[this.frequency],
    );
  }

  if (this.renewalDate < newDate()) {
    this.status = "expired";

    next();
  }
});

export default mongoose.model("Subscription", subscriptionSchema);
