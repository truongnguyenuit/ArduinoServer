const express = require('express')
const router = express.Router()

router.get('/checkUpdate', async (req, res) => {
  console.log("heheheh")
  try {
    res.json({ success: true, message: 'Lấy biên lai thành công' })

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Mạng của bạn có vấn đề' })
  }
})

module.exports = router