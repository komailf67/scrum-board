<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Project;
use JWTAuth;


class ProjectsController extends Controller
{
    public function getProjects(Request $request)
    {
        $aProjects = Project::find(1);
        $user = JWTAuth::parseToken()->authenticate();
        $userId = $user->id;
        $aProjects = Project::all();
        foreach ($aProjects as $key => $project) {
            $sFullName = $project->fullName;
            $project->fullName = $sFullName;
        }
        return response()->json(
            [
                'success' => true,
                'projects'=> $aProjects,
                'userId'  => $userId,
            ]
        );
    }
    public function saveNewProject(Request $request)
    {
        $iUserId = $request->userId;
        $sProjectName = $request->projectName;
        $newProjectInputs = [
            'title' => $sProjectName,
            'creator_user_id' => $iUserId,
        ];
        $oNewProject = Project::create($newProjectInputs);
        $oNewProject->fullName = $oNewProject->full_name;
        if ($oNewProject->id) {
            return response()->json(
                [
                    'newProject' => $oNewProject,
                    'success' => true,
                    'message' => 'The new project has been created successfully'
                ]
                );
        }
    }
}
