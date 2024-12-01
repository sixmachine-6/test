const childProcess = require("child_process");

exports.postQuery = (req, res, next) => {
  const { query } = req.body;
  if (!query) {
    res.status(400).json({
      status: "fail",
      message: "please provide query",
    });
    return;
  }

  childProcess.execFile(
    "python",
    ["main.py", query],
    (error, stdout, stderr) => {
      if (error) {
        console.log(`Error: ${stderr}`);
        return res.status(500).json({ error: "Failed to process query" });
      }
      try {
        const result = JSON.parse(stdout);
        res.json(result);
      } catch (parseError) {
        console.error("Failed to parse Python script output:", parseError);
        res.status(500).json({ error: "Invalid response from script" });
      }
    }
  );
};
