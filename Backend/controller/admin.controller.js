export async function addCourse(req,res)
{
    try {
        const { courseName, faculty, duration } = req.body;
        console.log("Request body:", courseName, faculty, duration);   
        // Check for required fields
        if (!courseName || !faculty || !duration) {
          return res.status(400).json({ message: "courseName, faculty, and duration are required." });
        }
    
        // Create and save course
        const newCourse = new Course({
          courseName,
          faculty,
          duration,
        });
    
        const savedCourse = await newCourse.save();
        res.status(201).json({ message: "Course created successfully", course: savedCourse });
      } catch (error) {
        console.error("Error creating course:", error);
        res.status(500).json({ message: "Server error while creating course" });
      }
}

export async function getStudents(req,res) {
    try {
        
    } catch (error) {
        
    }
    
}
export async function getFaculties(req,res) {
    try {
        
    } catch (error) {
        
    }
    
}

export async function getStudentFeedback(req,res) {
    try {
        
    } catch (error) {
        
    }
    
}