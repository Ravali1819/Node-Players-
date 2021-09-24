exports.getAuth = (req, res, next) => {
  res.render("auth/MainPage.ejs", {
    pageTitle: "Authentication",
    path: "/",
  });
};

exports.postAuth = (req, res, next) => {
  const admin = req.body;
  if (admin.admin === "admin") {
    res.redirect("/adminPage");
  } else {
    res.redirect("/Players");
  }
};
