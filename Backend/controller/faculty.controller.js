
export async function addLecturePDFS(req,res) 
{
    try {
        const { courseName, pdfs = []} = req.body;
    
        // Check if course exists
        const course = await Course.findOne({ courseName });
        if (!course) {
          return res.status(404).json({ success: false, message: "Course not found." });
        }
    
        // Add PDFs if provided
        if (pdfs.length > 0) {
          course.pdfs.push(...pdfs); // Each item: { title, url }
        }
        await course.save();
    
        res.status(200).json({
          success: true,
          message: "Media added to course successfully.",
          updatedCourse: course,
        });
    
      } catch (err) {
        console.error("Error in addMediaToCourse:", err);
        res.status(500).json({ success: false, message: "Server error." });
      }
}
export async function addLectureVIDEOS(req,res) 
{
    try {
        const { courseName, video } = req.body;
    
        if (!courseName || !video || !video.title || !video.url) {
          return res.status(400).json({
            success: false,
            message: "courseName and video (with title and url) are required.",
          });
        }
    
        const course = await Course.findOne({ courseName });
    
        if (!course) {
          return res.status(404).json({
            success: false,
            message: "Course not found.",
          });
        }
    
        // Add the new video
        course.videos.push(video);
        await course.save();
    
        return res.status(200).json({
          success: true,
          message: "Video added successfully.",
          updatedVideos: course.videos,
        });
      } catch (error) {
        console.error("Error in addVideoToCourse:", error.message);
        return res.status(500).json({
          success: false,
          message: "Server error. Could not add video.",
        });
      }
}
export async function addLectureASSIGNMENT(req,res) 
{
    try {
        const { courseName, pdf } = req.body;
    
        if (!courseName || !pdf || !pdf.title || !pdf.url) {
          return res.status(400).json({
            success: false,
            message: "courseName and pdf (with title and url) are required.",
          });
        }
    
        const course = await Course.findOne({ courseName });
    
        if (!course) {
          return res.status(404).json({
            success: false,
            message: "Course not found.",
          });
        }
    
        course.pdfs.push(pdf);
        await course.save();
    
        return res.status(200).json({
          success: true,
          message: "Lecture assignment (PDF) added successfully.",
          updatedPDFs: course.pdfs,
        });
      } catch (error) {
        console.error("Error in addLectureAssignmentToCourse:", error.message);
        return res.status(500).json({
          success: false,
          message: "Server error. Could not add lecture assignment.",
        });
      }
}
export async function addLectureQUIZ(req,res) {
    try {
        
    } catch (error) {
        
    }
}
export async function getSubjects(req,res) {
    try {
        
    } catch (error) {
        
    }
}
