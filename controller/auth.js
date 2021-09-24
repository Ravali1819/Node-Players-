exports.getAuth = (req, res, next) => {
  res.render("auth/MainPage.ejs", {
    pageTitle: "Authentication",
    path: "/",
    message: false,
  });
};

exports.postAuth = (req, res, next) => {
  const admin = req.body;
  if (admin.admin !== "admin" && admin.admin !== "user") {
    console.log(admin);
    return res.render("auth/MainPage.ejs", {
      path: "/",
      pageTitle: "Authentication",
      message: "Enter Correct User/ Admin",
    });
  }
  if (admin.admin === "admin") {
    res.redirect("/adminPage");
  } else {
    res.redirect("/Players");
  }
};
