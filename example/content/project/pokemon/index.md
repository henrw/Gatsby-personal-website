---
title: "Retro Game API for Reinforcement Learning"
tags:
  - "PokemonGold"
  - "Simulation"
  - "RL"
date: 2022-03-10
path: "project/pokemon"
excerpt: A reinforcement learning simulation API for retro games (e.g., Pokemon Gold), built on OpenAI Gym-Retro package, featuring utility classes (recorder, interactor, and dataset), vision transform classes (random cropping, random convolution, and gaussian noise) and a GUI visualizing observation space and state information.
# selected: true
cover: "./preview.png"
links:
  - name: "Github"
    url: "https://github.com/henrw/gym-retro-pokemon"
  - name: "Dataset"
    url: "https://drive.google.com/file/d/1i2nzyMpVT9Mtr-RJ1dy3RE2FCFrsdDiz/view"
priority: 4
---

## Install
1. Before installation, make sure [these packages](#dependencies) have been installed.
2. Run in the terminal
```bash
git clone git@github.com:henrw/gym-retro-pokemon.git
cd gym-retro-pokemon
pip install -e .
```

## Retro Game Integration
1. Download Rom of the retro game you want to integrate.
2. Compile [Gym-Retro integration GUI tool](https://github.com/openai/retro).
3. Integrate the game for a runnable Rom; retrieve memory addresses of variables (e.g., HP, x-y-z, attack, etc.) you want to observe.

## Simulation Environment
**PokeEnv** is provided with methods:
```python
class PokeEnv(RetroEnv):
  """Pokemon Simulation Environment."""

  def __init__(self, game, resolution, recorder, state=retro.State.DEFAULT,
               use_restricted_actions=retro.Actions.FILTERED,
               inttype=retro.data.Integrations.STABLE):
        """PokeEnv constructor.
        
           Args:
             game: string, directory of game rom,
             resolution: (W,H), resolution of game to be rendered,
             recorder: poke.utils.recorder or None
        """
  def render(self, mode='human', close=False):
    """Render game simulation GUI.

       Args:
         mode: string, 'human' (viewer) or 'rgb_array' (np.array)
         close: bool, whether window shows up
    """

  def step(self, a):
    """Emulate one simulation step.
      
       Arg:
         a: np.array, action
    """

  def reset(self):
    """Reset emulator to the meta state."""

  def close(self):
    """Close viewer and emulator if exist."""
```

## Utility Classes
### Recorder
```python
class Recorder(object):
  """Recorder ultility object."""

  def __init__(self, name, fps=24, resolution=None):
    """Recorder constructor."""
  
  def record(self, action, observation, data):
    """Record action and state at each step.

    Automatically called with PokeEnv.step() if there is a recorder.
    """

  def save(self):
    """Save record to ./record/record_name/ folder.

    Actions, state saved as npy files, metadata saved as json file.
    """
```

### Interactor
```python
def play(env, fps=30, zoom=None, keys_map=None):
  """Play the game with predefined action space."""
```

### Dataset
```python
class PokeDataset(Dataset):
    """Pokemon Dataset API for loading simulation data.
    
    Inherit torch.utils.data.DataSet.
    """

    def __init__(self, mode="full", root="record", train=True):
        """Dataset Constructor.

           Args:
             mode: String, load"full"-trajectory or "single" time step
             root: String, root directory, default as "./record"
             train: Bool, default as True, no functionality related to it so far
        """
        
    def __len__(self):
    def __getitem__(self, idx):
```
[Sample dataset](https://drive.google.com/file/d/1i2nzyMpVT9Mtr-RJ1dy3RE2FCFrsdDiz/view?usp=sharing)

## Vision Transform Classes
**RandomCropping**, **RandomConvolution** and **GaussianNoise** wrapper classes are provided.

```python
class ClassName(Wrapper):
    """
    ClassName in Cropping/convolution/GaussianNoise
    """

    def __init__(self, env, **kwargs):
        """
           Args:
             env: PokeEnv,
             kwargs: includes convolution layer size/padding, gaussian noise mean/ std, etc.
        """
        super().__init__(env)
        self.rc_size = size
        self.rc_padding = padding

    def step(self, action) -> ob_rc, rew, done, info:
      
```

## Dependencies
- openai-gym=0.21.0
- openai-retro=0.8.0
- pygame=2.1.2
