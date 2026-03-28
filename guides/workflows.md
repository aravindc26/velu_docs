---
title: "Workflows"
description: "Automate documentation updates with workflows triggered by pull requests or schedules."
---

Workflows automate the process of keeping your documentation in sync with your codebase. Configure workflows to run automatically when pull requests are merged or on a fixed schedule.

## Create a workflow

1. Navigate to **Workflows** in the dashboard
2. Click **Create workflow**
3. Enter a name for your workflow
4. Select a trigger repository — this is the repo that will trigger the workflow
5. Optionally, add context repositories for additional documentation sources
6. Choose a trigger type:
   - **Pull request** — Runs when a PR is merged to the configured branch
   - **Scheduled** — Runs on a cron schedule you define
7. Save the workflow

## Run a workflow manually

To trigger a workflow immediately without waiting for its scheduled time or a pull request:

1. Open the workflow from the **Workflows** page
2. Click **Edit**
3. Click **Run now**

The workflow will execute immediately. Check the **Runs** tab to monitor its progress.

## Edit a workflow

Existing workflows can be modified at any time. Open a workflow and click **Edit** to update its name, trigger, schedule, or connected repositories.

## Monitor workflow runs

The **Runs** tab shows the execution history for each workflow:

- **PR-triggered runs** — Link directly to the pull request that triggered the run
- **Scheduled runs** — Display the time the run started
- **Failed runs** — Show an error message without exposing internal details
